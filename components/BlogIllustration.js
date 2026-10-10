import { ArrowRight, Check, FileText, ScanLine } from "lucide-react";

export default function BlogIllustration() {
  return (
    <div className="blog-illustration" aria-hidden="true">
      <div className="blog-illustration-label"><span /> Preserving risk intent</div>
      <div className="blog-flow">
        <div className="blog-flow-node"><ScanLine size={22} strokeWidth={1.4} /><span>Risk concern</span><small>Understand the behaviour</small></div>
        <ArrowRight className="blog-flow-arrow" size={20} strokeWidth={1.2} />
        <div className="blog-flow-node blog-flow-reviewed"><FileText size={22} strokeWidth={1.4} /><span>Reviewed scenario</span><small>Make the judgment explicit</small><div className="blog-reviewed-badge"><Check size={12} /> Intent preserved</div></div>
        <ArrowRight className="blog-flow-arrow" size={20} strokeWidth={1.2} />
        <div className="blog-flow-node"><Check size={22} strokeWidth={1.4} /><span>Control evidence</span><small>Compare the outcome</small></div>
      </div>
      <div className="blog-illustration-caption">A shared reference, from concern to control.</div>
    </div>
  );
}
