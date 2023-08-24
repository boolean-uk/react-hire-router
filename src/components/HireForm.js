// import React, { useState } from 'react'

// function HireForm({ onHire }) {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email) {
//       alert('Please enter a name and email.');
//       return;
//     }

//     const newPerson = {
//       name: {
//         first: name,
//         last: '', 
//       },
//       email: email,
//     };

//     onHire(newPerson);
//     setName('');
//     setEmail('');
//   };

//   return (
//     <div>
//       <h2>Hire a New Person</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="text"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <button type="submit">Hire</button>
//       </form>
//     </div>
//   );
// }

// export default HireForm;