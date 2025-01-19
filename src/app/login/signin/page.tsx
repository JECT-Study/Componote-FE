import { Divider } from "@/components";
import * as S from "./_components/SignIn.style";
import SignInTitle from "./_components/SignInTitle/SignInTitle";
import SignInFooter from "./_components/SignInFooter/SignInFooter";
import SignInProfile from "./_components/SignInProfile/SignInProfile";
import SignInJob from "./_components/SignInJob/SignInJob";
import SignInButton from "./_components/SignInButton/SignInButton";

export default function SignInPage() {
  return (
    <S.SigninWrapper>
      <S.SigninModule>
        <SignInTitle />
        <Divider $stroke="normal" $layout="horizontal" />
        <S.SigninBodyModule>
          <SignInProfile />
          <SignInJob />
          <Divider $stroke="normal" $layout="horizontal" />
          <SignInButton />
        </S.SigninBodyModule>
      </S.SigninModule>
      <SignInFooter />
    </S.SigninWrapper>
  );
}
