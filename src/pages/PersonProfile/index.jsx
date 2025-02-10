import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams, useNavigate } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const [editable, setEditable] = useState(false);
  const {people, HirePersonFunc, editCallback} = props;
  const {id} = useParams();
  const nav = useNavigate();
  
  useEffect(() => {
    let p = people.find(x => x.login.username == id);
    if(p)
    {
      setPerson(p);
      setEditable(editCallback!=null);
    }
  },
  [id,people]
  );
  
  if (!person) return <p>Loading...</p>

  const SaveEdit = () => 
  {
    editCallback(person)
    nav("/");
  }

  //NOTE: As you can see I've had a little bit of fun with this... 
  //      It really would've been easier to hardcode the editable fields... (not as fun though)

  const handleChange = (fieldlabel, fieldVal) => 
  {
    if (fieldVal.currentTarget.type == "checkbox")
      setPerson({...person, [fieldlabel]:fieldVal.currentTarget.checked});
    else
      setPerson({...person, [fieldlabel]:fieldVal.currentTarget.value});
    console.log(fieldlabel, fieldVal);
  }

  function checkType(a,b) {
    return typeof(a) == typeof(b);
  }
  const getInputField = (fieldlabel,fieldVal,disbled) =>
  {
    let t = checkType(fieldVal,"") ? "text" : 
            checkType(fieldVal, 0) ? "number" : 
            checkType(fieldVal, true) ? "checkbox" : null;
    let inputelement = "checkbox" == t ? 
      <input className='form-control' htmlFor={fieldlabel} disabled={disbled} type={t} checked={person[fieldlabel]} onChange={(e) => handleChange(fieldlabel,e)} /> : 
      <input className='form-control' htmlFor={fieldlabel} disabled={disbled} type={t} value={person[fieldlabel]}   onChange={(e) => handleChange(fieldlabel,e)} />;

      return t != null ? (
        <li > 
          <label className='form-label' name={fieldlabel}>{fieldlabel}</label>
          {inputelement}
          <br/>
        </li>): "";
  }
  const presentUser = () => {
    if (editable)
      return (
        <>
          {
            Object.entries(person).map((name,index) => (

              <div className='mb-3' key={index}>
                <ul>
                  {getInputField(name[0],name[1],false)}
                </ul>
              </div>
            ))
          }
          <button type="submit" onClick={SaveEdit}>Save</button>
        </>
      );
    else 
      return (
        <>
        {
          Object.entries(person).map((name,index) => (

            <div className='mb-3' key={index}>
              <ul>
                {getInputField(name[0],name[1],true)}
              </ul>
            </div>
          ))
        }
        
        <HireForm person={person} HirePersonFunc={HirePersonFunc} />
      </>
    );
  }

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {presentUser()}
    </article>
  )
}

export default PersonProfile
