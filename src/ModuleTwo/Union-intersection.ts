// Union Type

type NoobDeveloper = {
    name: string
}
type JuniorDeveloper = {
    name: string,
    expertise: string,
    experience: number
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Rafin Hossain",
    expertise: 'javaScript',
    experience: 1
}

// Intersection type 

type Developer = NoobDeveloper & {
    expertise: string,
    experience: number
}

/* enum Level{
    junior="Junior",
    mid="Mid",
    senior="Senior"
} */

type NextLevelDeveloper = JuniorDeveloper & {
    leaderShip: number,
    level:'junior'| 'mid'| 'senior'
}

const specialDeveloper: NextLevelDeveloper = {
    name: "rafin",
    expertise: "Typescript",
    experience: 6,
    leaderShip: 2,
    level:'junior' // Level.junior(enum use kore)
}