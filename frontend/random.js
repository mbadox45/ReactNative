import {faker} from '@faker-js/faker';

export const randomData = (num, arr) => {
    for (let i = 0; i < num; i++) {
        arr.push({
            name: faker.person.fullName(),
            jenjang: 'SMA',
            gender: faker.person.gender(),
            phone: faker.person.jobType,
        })
    }
}