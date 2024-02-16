import MainContainer from "../../components/maincontainer/maincontainer";
import SubContainer from "../../components/subcontainer/subcontainer";
import Header from "../../../components/mainheader/header";
import { observer } from "mobx-react-lite";


function Store() {
    return (
      <>
        <MainContainer>
          <SubContainer>
            <Header title="Store"> </Header>

          </SubContainer>
        </MainContainer>
      </>
    );
  }
  
export default observer(Store);