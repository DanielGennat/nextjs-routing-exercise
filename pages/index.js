import Link from "next/link";
import TextLink from "../components/TextLink";

export default function IndexPage() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href="/team">
        <TextLink>This is our team</TextLink>
      </Link>
    </>
  );
}
