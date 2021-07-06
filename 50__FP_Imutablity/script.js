// immutability = object yang tidak boleh dirubah stlh object dibuat

// create object user
const user = {
  firstname: 'Joko',
  lastName: 'Susilo', 
}

// create object createUserWithNewLastName
const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName }
}

// change value object user
const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

// alih-alih mengubah nilai objek secara langsung, terapkan perubahan tersebut pada nilai return dalam objek baru.