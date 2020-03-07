export const fetchRandomUser = async () => {
    const data = await fetch('https://randomuser.me/api');
    return await data.json();
};