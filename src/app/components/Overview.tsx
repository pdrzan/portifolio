import LinkButton from './LinkButton.tsx'
import {ReactComponent as Linkedin} from '../icons/linkedin.svg';
import {ReactComponent as GitHub} from '../icons/github.svg';
import {ReactComponent as Twitter} from '../icons/twitter.svg';
import {ReactComponent as Download} from '../icons/download.svg';

export default function Overview() {
  return (
    <div className="px-[20px] py-[10px] gap-[20px] flex flex-col justify-between">
      <div>
        Full stack developer with one year of experience based on Campinas, Brazil. Worked most of the time with web applications. I really like my work.
      </div>
      <div className="flex flex-col gap-[10px]">
        <LinkButton 
          url="https://www.linkedin.com/in/pdrzan" 
          icon={<Linkedin/>} 
          text="Linkedin"
          hoverText="Connect with me"
        />
        <LinkButton
          url="https://github.com/pdrzan"
          icon={<GitHub/>}
          text="GitHub"
          hoverText="See my projects"
        />
        <LinkButton
          url="https://x.com/pdrzan"
          icon={<Twitter/>}
          text="X (formally Twitter)"
          hoverText="Follow me"
        />
      </div>
      <div 
        className={`flex justify-end`}
      >
        <a 
          className={`
            px-[20px] py-[10px] gap-[10px] flex
            rounded-[5px] border border-(--primary-blue)
            text-(--primary-blue) hover:opacity-85`}
          href="/PedroZanelato_CV.pdf"
        >
          <div>
            Download my CV
          </div>
          <Download className="w-[20px]"/>
        </a>
      </div>
    </div>
  );
}
