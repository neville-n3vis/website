import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { 
  CreditCard, Settings, ShoppingCart, X, CheckCircle2, ArrowRight,
  Zap, Target, Eye, Rocket, ShieldAlert, BarChart3, Database, Building2, Calendar, Globe, FileWarning
} from 'lucide-react';
import { PageView } from '../types';

interface ProductsProps {
  onNavigate: (view: PageView) => void;
}

const products = [
  {
    id: 1,
    title: "PSP Connect: Order to Cash",
    compatibility: [
      { name: "BC", icon: <Database className="w-3 h-3" />, color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" },
      { name: "F&O", icon: <Building2 className="w-3 h-3" />, color: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800" }
    ],
    description: "Captures orders from multiple channels (e-commerce, POS, or manual entry) and automatically routes them into the ERP.",
    longDescription: "Our Order-to-Cash module streamlines the front-end of your financial operations. By syncing digital storefronts directly with Business Central or F&O, it ensures that sales data is accurate and inventory levels are updated in real-time.",
    features: [
      "Create, update, cancel, refund and capture Sales Orders",
      "Manages transactions originating from ecommerce sites, in-store POS purchases, and recurring subscriptions.",
      "Processes orders with multiple Payment Types (e.g., Klarna, Swish, Gift Card) associated with a single order.",
      "Sends Payment Links/Requests from BC via SMS, Email and Mobile Pay to customers for Prepayments and Deposits.",
      "Facilitates integrated Debt Collection (Inkasso)."
    ],
    icon: <CreditCard className="w-8 h-8 text-white" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "PSP Connect: Reconciliation",
    compatibility: [
      { name: "BC", icon: <Database className="w-3 h-3" />, color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" },
      { name: "F&O", icon: <Building2 className="w-3 h-3" />, color: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800" }
    ],
    description: "Enterprise-grade payment integration for ERPs. Automated matching of PSP Settlements files with Customer Invoices.",
    longDescription: "The Reconciliation module is designed for complex finance teams. It pulls settlement data from 50+ PSPs and automatically matches bank payouts to outstanding customer invoices, handling bank fees and FX gains/losses along the way.",
    features: [
      "Auto-Import: Automatically fetches and imports Payment Service Provider (PSP) settlement files directly into Business Central.",
      "Auto-Matching: Payments are automatically matched against the corresponding Sales transactions (e.g., Sales Orders or Invoices).",
      "Exception Handling: Unmatched Payments are automatically identified and can be processed separately or saved for manual processing at a later date.",
      "Automated Fee Handling: Fees, Commissions, and associated VAT are automatically calculated, separated, and posted during reconciliation."
    ],
    icon: <Settings className="w-8 h-8 text-white" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Order Connect",
    compatibility: [
      { name: "BC", icon: <Database className="w-3 h-3" />, color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" }
    ],
    description: "Full order management automation. Create, update, sync orders, shipments, and inventory to BC. PSP Connect integration.",
    longDescription: "Order Connect acts as the intelligent bridge specifically for Business Central users. It handles the bi-directional flow of data between your shipping carriers, e-commerce platforms, and your ERP core.",
    features: [
      "100% BC Integration: Seamlessly syncs with Microsoft Dynamics 365 Business Central; all actions are immediately reflected in BC.",
      "Real-Time, Secure Data: Streams live data directly from BC; no customer or order data is ever stored outside the source system.",
      "Comprehensive Document Management: Manage lifecycle for Sales Orders, Return Orders, Credit Memos, Invoices, and Quotes.",
      "PSP Connect Integration: Capture Payments, Release Authorization, Refund, and Send Paylinks directly from the order screen.",
      "Dynamic Document Overview: Instant access to streamed documents with powerful Search and Advanced Filtering across all fields.",
      "Customizable Workspace: Freeze, order, and sort columns to suit individual user workflows.",
      "Real-Time Document Creation: Document types created with auto-populated Customer Lookup and instant calculated fields.",
      "Robust Administration: Multi-Company Connection capability with granular User & Access Management.",
      "Custom Field Support: Tailor input forms with company-specific Custom Fields on Sales Header, Sales Line, and Payment Methods."
    ],
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Global PSP Integrations",
    compatibility: [
      { name: "BC", icon: <Database className="w-3 h-3" />, color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" },
      { name: "F&O", icon: <Building2 className="w-3 h-3" />, color: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800" }
    ],
    description: "Direct connectivity to 40+ global Payment Service Providers for seamless ERP synchronization.",
    longDescription: "Our Global PSP Integration engine provides the necessary connectivity to ensure your ERP is never isolated from your payment data, regardless of which provider you choose.",
    features: [
      "Core Function: PSP Connect streamlines global payments by integrating multiple Payment Service Providers (PSPs) directly into Microsoft Dynamics 365 Business Central and Finance & Operations, automating the end-to-end Order-to-Cash process.",
      "Solution Scope: Provides an end-to-end automated solution for the entire Order-to-Cash process.",
      "Currently Supported Providers: Adyen, AfterPay, Avarda, Briqpay, CDON, Computop, Klarna, Nets, PayPal, PayEx, Qliro, Shopify, Stripe, Svea, Swish, Vipps, Walley, and more."
    ],
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 5,
    title: "PS Inkasso Connect",
    compatibility: [
      { name: "BC", icon: <Database className="w-3 h-3" />, color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" }
    ],
    description: "Automate debt collection in Business Central. Send unpaid invoices and track updates — no file exports or middleware required.",
    longDescription: "PS Inkasso Connect enables a seamless, real-time integration between Microsoft Dynamics 365 Business Central and PS Inkasso's services. Finance teams can submit cases, track updates, and receive payments — all without leaving Business Central. No middleware, no manual exports, no chasing external reports.",
    features: [
      "One-Click Submission: Send unpaid invoices directly from the customer ledger to PS Inkasso using integrated actions.",
      "Live Case Status Updates: View real-time case status, suggestions, payment info, and close dates directly in Business Central.",
      "Automated Payment Posting: Payments and credit memos from PS Inkasso are posted automatically in BC, marked for follow-up.",
      "Full Reminder & Collection Workflow: Supports invoice service, payment reminders, and debt collection directly via PS Inkasso.",
      "Fakturaservice Support: Let PS Inkasso send invoices — with confirmation and links logged in Business Central.",
      "Data Compliance: Only relevant invoice and customer data is shared (e.g. due date, amounts, interest, and contact info).",
      "No Middleware Required: Everything runs inside Business Central using standard setup and secure web service communication.",
      "Currency Account Support: Supports separate journals per currency for accurate reconciliation of incoming payments."
    ],
    icon: <FileWarning className="w-8 h-8 text-white" />,
    color: "from-rose-500 to-red-600"
  }
];

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 min-h-screen">
      
      {/* 1. Header Section */}
      <AnimatedSection>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="leading-tight tracking-tight mb-8">
            <span className="block text-3xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-300" style={{ WebkitBackgroundClip: 'text' }}>
              Order Management & Payments Reconciliation
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium text-center">
            Modular, scalable, and built specifically for the Microsoft ecosystem.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. Grid Section — 5 products: 2 top row, 3 bottom row */}
      <div className="mb-8 relative z-10">
        {/* Top row — 2 products centred */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
          {products.slice(0, 2).map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100}>
              <ProductCard product={product} onSelect={setSelectedProduct} />
            </AnimatedSection>
          ))}
        </div>
        {/* Bottom row — 3 products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(2).map((product, index) => (
            <AnimatedSection key={product.id} delay={(index + 2) * 100}>
              <ProductCard product={product} onSelect={setSelectedProduct} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* 3. BOOK DEMO BUTTON */}
      <AnimatedSection delay={200}>
        <div className="flex flex-col items-center justify-center mb-8">
          <button 
            onClick={() => onNavigate(PageView.CONTACT)} 
            className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2 group"
          >
            <Calendar className="w-6 h-6 mr-1" />
            <span>Book Demo</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium text-center">
            Discuss your specific workflow with our ERP experts.
          </p>
        </div>
      </AnimatedSection>

      {/* 4. Visual Spotlight */}
      <AnimatedSection delay={400}>
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-0">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-5/12 h-[300px] lg:h-auto relative">
              <img 
                src="https://res.cloudinary.com/dut2qdf5z/image/upload/v1768656393/Gemini_Generated_Image_q91lskq91lskq91l_jqu7jp.png" 
                alt="Finance Automation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-100 dark:to-slate-900 hidden lg:block"></div>
            </div>

            <div className="w-full lg:w-7/12 p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 uppercase tracking-tight">
                Order to Reconciliation <span className="text-primary-600 dark:text-primary-400">Automation</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <Benefit icon={<Zap className="text-primary-500" />} title="Productivity" text="Process high volumes of transactions automatically and frees up key resource for high-value tasks." />
                <Benefit icon={<Target className="text-emerald-500" />} title="Accuracy" text="Less manual input means less errors." />
                <Benefit icon={<Eye className="text-blue-500" />} title="Transparency" text="Track Sales transactions & Payments." />
                <Benefit icon={<Rocket className="text-purple-500" />} title="Speed" text="Process 1000s of transaction fast and easy." />
                <Benefit icon={<ShieldAlert className="text-amber-500" />} title="Control" text="Book unreconciled transactions for future processing." />
                <Benefit icon={<BarChart3 className="text-rose-500" />} title="Scalability" text="Utilise multiple PSPs simultaneously." />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center p-4 pt-6 overflow-y-auto">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)}></div>
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800 z-[100000] animate-in zoom-in-95 duration-200">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white z-20 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="p-8 md:p-12"> 
              <div className="flex flex-row flex-nowrap items-center justify-center gap-2 mb-4">
                {selectedProduct.compatibility.map((erp: any) => (
                  <span key={erp.name} className={`flex items-center whitespace-nowrap gap-1.5 px-3 py-1 text-xs font-bold rounded-full border ${erp.color}`}>
                    {erp.icon} {erp.name}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">{selectedProduct.title}</h2>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-left">
                {selectedProduct.longDescription}
              </p>
              
              <div className="space-y-4 mb-10 text-left"> 
                <p className="font-bold text-xs uppercase tracking-[0.2em] text-slate-400">Key Capabilities</p>
                {selectedProduct.features?.map((f: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    onNavigate(PageView.CONTACT);
                  }}
                  className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold shadow-lg hover:bg-primary-500 flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" /> 
                  <span>Book Demo</span>
                </button>
                <button 
                  onClick={() => setSelectedProduct(null)} 
                  className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Extracted product card component to keep the grid sections DRY
const ProductCard = ({ product, onSelect }: { product: any; onSelect: (p: any) => void }) => (
  <div 
    onClick={() => { window.scrollTo(0, 0); setTimeout(() => onSelect(product), 50); }}
    className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer active:scale-[0.98]"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
    
    <div className="flex flex-row flex-nowrap items-center justify-center gap-2 mb-6 overflow-hidden">
      {product.compatibility.map((erp: any) => (
        <span key={erp.name} className={`flex items-center whitespace-nowrap gap-1 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-tighter rounded-md border ${erp.color}`}>
          {erp.icon} {erp.name}
        </span>
      ))}
    </div>

    <div className="flex items-center space-x-4 mb-6">
      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
        {product.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
        {product.title}
      </h3>
    </div>
    
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
      {product.description}
    </p>

    <div className="mt-auto flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm uppercase tracking-widest">
      <span>Learn more</span>
      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
    </div>
  </div>
);

const Benefit = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex flex-col space-y-2 text-left">
    <div className="flex items-center space-x-3">
      <div className="w-5 h-5 flex-shrink-0">{icon}</div>
      <span className="font-bold text-slate-900 dark:text-white text-lg uppercase tracking-tight">{title}</span>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{text}</p>
  </div>
);
