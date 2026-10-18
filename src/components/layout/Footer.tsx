import { GitHubIcon } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} crystelf. {t.footer.rights}
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/crystelf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <GitHubIcon className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
