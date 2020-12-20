import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// TODO: Replace 'member' with 'inviter' in variable names.

export const create = async (userId) => {
    const newMember = {
        userId,
        invitesCreated: 0,
        grantedAt: new Date()
    }
    await set(newMember)

    return newMember
}

export const get = async (userId) => {
    // TODO Handle error can't load file.
    const result = await readFile('./src/inviterData.json')

    // TODO Handle error can't parse.
    const members = JSON.parse(result.toString())
    const existingMember = members.find(m => m.userId === userId)

    return existingMember
}

export const index = async () => {
    const result = await readFile('./src/inviterData.json')
    return JSON.parse(result.toString())
}

export const set = async (updatedMember) => {
    const members = await index()
    let existingMember = members.find(m => m.userId === updatedMember.userId)
    
    if (existingMember) Object.assign(existingMember, updatedMember)
    else members.push(updatedMember)

    const stringified = JSON.stringify(members)
    await writeFile('./src/inviterData.json', stringified)
}