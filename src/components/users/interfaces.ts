export interface Login {
    email: string;
    password: string;
}

export interface Account extends Login {
    _name: string;
    _date_born: Date;
}