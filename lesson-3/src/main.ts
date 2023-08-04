type TBaseUser = {
    id: number,
    email: string,
}

type TAdminUser = TBaseUser & {
    type: 'admin',
    some: number
}

type TManagerUser = TBaseUser & {
    type: 'manager',
    accessLevel: number
}

type TClientUser = TBaseUser & {
    type: 'client',
    age: number,
    blocked: boolean
}

type TUser = TAdminUser | TManagerUser | TClientUser;

const users: TUser[] = [
    { type: 'admin', id: 1, email: '1', some: 1 },
    { type: 'manager', id: 2, email: '2', accessLevel: 1 },
    { type: 'client', id: 1, email: '1', age: 18, blocked: false },
]


type RoutViewRecord = {
    type: 'view',
    view: () => string,
}

type RoutReadRecord = {
    type: 'redirect',
    redirect: string
}

type RoutRecord = RoutViewRecord | RoutReadRecord;

const routRecords : RoutRecord[] = [];

function typeFilter<T extends {type : string}, U extends T['type']>(variant : U) {
    return (el : T) : el is Extract<T, {type: U}> => el.type === variant;
}

let clU = users.filter(typeFilter('client'));
let rR = routRecords.filter(typeFilter(''));