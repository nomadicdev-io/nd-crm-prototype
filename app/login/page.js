import Main from "@/components/common/Main";
import img from "@/public/landing-bg.png";
import PageBG from "@/components/common/PageBG";
import CenterWrapper from "@/components/common/CenterWrapper";
import LoginForm from "@/components/sections/LoginForm";

export default function Login() {
    return (
      <Main>
        <PageBG img={img}/>
        <CenterWrapper>
            <LoginForm />
        </CenterWrapper>
      </Main>
    )
  }
  