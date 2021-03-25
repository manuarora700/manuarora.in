import Loader from "./Loader";

export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader show={true} />
    </div>
  );
}
