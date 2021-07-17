import { useAuthState } from "../context/auth";

export default function IndexPage() {
  const { isAuthenticated } = useAuthState();

  return isAuthenticated ? "hello user" : "guest";
}
