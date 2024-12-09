import { faker } from '@faker-js/faker';

export default{
    createUser: function(){
        let data ={
            firstName: faker.person.firstName(),
            lastname: faker.person.lastName(),
            postalCode: faker.location.zipCode()

        }
        return data;
    }
}