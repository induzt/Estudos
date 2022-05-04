function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Steph', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Dan', 'Admin');
usuarios.set('Ju', 'User');

console.log(getAdmins(usuarios));