import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialClax = {
    clax: "",
};

const claxList = ({ claxes, updateClaxes }) => {
    console.log(claxes);
    const [editing, setEditing] = useState(false);
    const [claxToEdit, setClaxToEdit] = useState(initialClax);
    const editClax = clax => {
        setEditing(true);
        setClaxToEdit(clax);
    };

    const deleteClax = clax => {
        axiosWithAuth()
        .delete(`/api/claxes/${clax.id}`)
        .then(res => updateClaxes(claxes.filter(clax => clax.id !== res.data)))
        .catch(err => console.log('Undeleted', err)); 
    };

    return (
        <div claxName="claxes-wrap">
      <p>claxes</p>
      {claxs.map(clax => (
          <li key={clax.clax} onClick={() => editClax(clax)}>
            <span>
            <span claxName="delete" onClick={e => {
                e.stopPropagation();
                deleteClax(clax)
            }
        }>
          x
          </span>{" "}
          {clax.clax}
          </span>
          <div
              className="clax-box"
              style={{ backgroundclax: clax.code.hex }}
              />
            </li>
        ))}
     </ul>
           {editing && (
            <form onSubmit={saveEdit}>
            <legend>edit clax</legend>
            <label>
            clax name:
            <input
            onChange={e =>
                setClaxToEdit({ ...claxToEdit, clax: e.target.value })
            }
            value={claxToEdit.clax}
            />
            </label>
            <label>
            hex code:
            <input
            onChange={e =>
                setClaxToEdit({
                    ...claxToEdit,
                    code: { hex: e.target.value }
                })
            }
            value={claxToEdit.code.hex}
            />
            </label>
            <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
            </div>
            </form>
            )}
            <div className="spacer" />
            </div>
            );
        };
  export default ClassList;