import {fetchRandomUser} from './random-user-api.js';

export * from './random-user.js';
export * from './db-person.js';
export * from './cp-person.js';

(async () => {
    const cpPersons = await fetch('/demo/api/classpath/person');
    document.querySelector('cp-person').render(await cpPersons.json());
    // console.log((await cpPersons.json()));

    const dbPersons = await fetch('/demo/api/db/person');
    document.querySelector('db-person').render(await dbPersons.json());
    // console.log(await dbPersons.json());

    document.querySelector('#btnUser').addEventListener('click', async function () {
        document.querySelector('random-user ').render(await fetchRandomUser());
    });
})();
