const URLAPI = "https://randomuser.me/api/?results=50&inc=gender,name,nat,dob,picture,phone"

const getKoders = async () => {
    let response = await fetch(
        `${URLAPI}`
    );
    let data = await response.json();
    console.log(data)
    return data;
};

const deleteKoder = async () => {
    let response = await fetch(
        `${URLAPI}`,
        {
            method: "DELETE",
        }
    );
    let data = await response.json();
    return data;
};
export { getKoders, deleteKoder }