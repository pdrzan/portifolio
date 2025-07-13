import Page from './Page'

export default function Header() {
  return (
    <div className="header p-[20px] flex justify-between">
      <div className="flex flex-col">
        <span>Pedro Zanelato</span>
        <span className="text-(--primary-grey)">Software Developer</span>
      </div>
      <div className="pages flex gap-[10px]">
        <Page name="Home" url="/" selected={true}/>
        <Page name="Articles" url="https://www.tabnews.com.br/pdrzan" selected={false}/>
      </div>
    </div>
  );
}
