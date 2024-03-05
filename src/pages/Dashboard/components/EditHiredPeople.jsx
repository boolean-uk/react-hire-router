import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditHiredPeople(props) {

  const [productToUpdate, setProductToUpdate] = useState(null);

  const { people } = props;
  const {id} = useParams();
  
  useEffect(() => {
    if (people && id) {
      setProductToUpdate(people.find((aPeople) => (aPeople.name.first+aPeople.name.last) === (id)));
    }
  }, [people, id]);

  //   const handleSave = () => {
  //   setSubmissions((prevSubmissions) =>
  //     prevSubmissions.map((submission) =>
  //       submission.id === submissionId
  //         ? { ...submission, username: editedUsername, color: editedColor, spendTime: editedSpendTime, review: editedReview }
  //         : submission
  //     )
  //   );
  // };
  console.log('Inside edit ',{ productToUpdate });


  /** TODO: Write code to set the `productToUpdate` state with the product data
   *  based on the ID that we get from the URL path parameter.
   *  You will need to use: `props`, `useParams`, and `useEffect` to achieve this.
   */

function handleChange(event) {
  const { name, value } = event.target;
  if (name === "firstName") {
    setProductToUpdate(prevState => ({
      ...prevState,
      name: { ...prevState.name, first: value }
    }));
  } else if (name === "lastName") {
    setProductToUpdate(prevState => ({
      ...prevState,
      name: { ...prevState.name, last: value }
    }));
  } else {
    setProductToUpdate(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
}

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={productToUpdate.name.first}
        />
      <input
        type="text"
        id="lastName"
        name="lastName" 
        onChange={handleChange}
        value={productToUpdate.name.last}
        />
      <button type="submit">Edit</button>
    </form>
  );
}