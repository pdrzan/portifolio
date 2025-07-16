import Header from './components/Header'
import Overview from './components/Overview'

export default function Home() {
  return (
    <div className="home w-full flex items-center justify-center">
      <main className="content w-[800px] flex flex-col">
        <Header/>
        <Overview/>
      </main>
    </div>
  );
}
