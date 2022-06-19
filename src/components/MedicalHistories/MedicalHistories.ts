import { faker } from '@faker-js/faker'

export const listHistorias: (departments: any[], patients: any[], users: any[], number?: number) => Promise<any[]> = async (departments, patients, users, number = 1) => {

    const cacheHistories: any[] = [];

    async function getAge(dateString: string) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    for (let index = 0; index < number; index++) {

        const departmentSelected = departments[Math.floor(Math.random() * departments.length)];

        const serviceSelected = departmentSelected.services[Math.floor(Math.random() * departmentSelected.services.length)];

        const patientSelected = patients[Math.floor(Math.random() * patients.length)];

        const userSelected = users[Math.floor(Math.random() * users.length)];



        cacheHistories.push(
            {
                number: (index * 1000).toString(),
                filiacion: {
                    name: patientSelected.name,
                    motherSurname: patientSelected.motherSurname,
                    fatherSurname: patientSelected.fatherSurname,
                    birthday: new Date(patientSelected.birthday),
                    dni: patientSelected.dni,
                    edad: await getAge(patientSelected.birthday),
                    gender: patientSelected.gender,
                    attorney: faker.helpers.arrayElement([null, faker.name.firstName() + " " + faker.name.lastName()]),
                    patient_id: patientSelected._id
                },
                anamnesis: {
                    record: "ANTECEDENTE " + faker.lorem.text(),
                    sickTime: faker.datatype.number({ min: 0, max: 5 }).toString() + faker.helpers.arrayElement(["d", "m", "h", "w"]),
                    consultationReason: {
                        title: "TITULO RAZON DE CONSULTA " + faker.lorem.text(),
                        description: "DESCRIPCION DE RAZON DE CONSULTA " + faker.lorem.text(),
                    },
                    physicalExam: {
                        fc: faker.datatype.number({ min: 60, max: 100 }).toString(),
                        fr: faker.datatype.number({ min: 16, max: 20 }).toString(),
                        t: faker.datatype.number({ min: 36, max: 41 }).toString(),
                        pa: (() => {

                            const num = faker.datatype.number({ min: 90, max: 140 })
                            return num.toString() + "/" + (num -  faker.datatype.number({ min: 40, max: 60})).toString()
                        })(),
                        sat02: faker.datatype.number({ min: 95, max: 100 }).toString(),
                    }
                },
                admissionDiagnosis: [{ title: "", type: "", cie: "" }],
                auxiliaryExam: faker.name.firstName() + " " + faker.name.lastName(),
                treatment: {
                    description: "DESCRIPCION DE TRATAMIENTO " + faker.lorem.text(),
                    department: {
                        _id: departmentSelected._id,
                        description: departmentSelected.name
                    },
                    service: {
                        _id: serviceSelected._id,
                        description: serviceSelected.name
                    }
                },
                doctor: {
                    _id: userSelected._id,
                    fatherSurname: userSelected.fatherSurname,
                    motherSurname: userSelected.motherSurname,
                    name: userSelected.name
                }

            }
        )

    }

    return cacheHistories;

}

