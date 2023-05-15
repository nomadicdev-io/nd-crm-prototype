import Main from "@/components/common/Main";
import img from "@/public/landing-bg.png";
import PageBG from "@/components/common/PageBG";
import CenterWrapper from "@/components/common/CenterWrapper";
import CreateForm from "@/components/sections/CreateForm";
import QuatationsList from "@/components/sections/QuatationsList";

export default function Create() {
    return ( 
        
        <Main>
            <PageBG img={img}/>

            <CenterWrapper>
                <CreateForm />
            </CenterWrapper>
        </Main>

    )
  }
  