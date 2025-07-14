import Header from './components/Header'

export default function Home() {
  return (
    <div className="home w-full flex items-center justify-center">
      <main className="content w-[800px] flex flex-col">
        <Header/>
        <div> Yes </div>
      </main>
    </div>
  );
}
