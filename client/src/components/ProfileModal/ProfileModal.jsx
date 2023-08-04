import { Modal, useMantineTheme } from '@mantine/core';
import "../../pages/Auth/Auth.css";

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
            <form action="" className="infoForm" >

            <h3>Your Info</h3>
            <div className="form-group" >
                <input type="text" className="infoInput" placeholder='Name' name='name'/>
            </div>
            <div className="form-group" >
                <input type="text" className="infoInput" placeholder='Relationship Status' name='relationshipstatus'/>
            </div>
            <div className="form-group" >
                <input type="text" className="infoInput" placeholder='Lives In' name='LivesIn'/>
            </div>
            <div className="form-group" >
                <input type="text" className="infoInput" placeholder='Works at' name='work'/>
            </div>
            <div className="form-group" >
                <input type="text" className="infoInput" placeholder='Working Position : Junior Developer etc.' name='workpostion'/>
            </div>
            <button className="button infoButton" type='submit'>Update</button>
        </form>
      </Modal>

    </>
  );
}

export default ProfileModal;