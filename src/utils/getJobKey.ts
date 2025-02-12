import SignupJobs from "@/types/enum/signupJobs";

/**
 * job 변환 (ex. "개발자" -> "DEVELOPER")
 * @param jobValue
 * @returns
 */
export default function getJobKey(jobValue: SignupJobs) {
  return (
    (Object.entries(SignupJobs).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value === jobValue
    )?.[0] as keyof typeof SignupJobs) || ""
  );
}
