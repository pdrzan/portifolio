import Page from './Page'

export default function Header() {
  return (
    <div className="header p-[20px] flex justify-between">
      <div className="flex flex-col">
        <span>Pedro Zanelato</span>
        <span className="text-(--primary-grey)">Software Developer</span>
      </div>
      <div className="pages flex gap-[20px] items-center">
        <Page name="Articles" url="https://www.tabnews.com.br/pdrzan"/>
      </div>
    </div>
  );
}
