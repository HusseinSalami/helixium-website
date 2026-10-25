const nav = ["Home", "Sales", "Inventory", "Accounting", "Field service", "POS", "Payroll"];

export function ErpProductMock({ locale = "en" }: { locale?: string }) {
  const current = ["en", "ar", "fr"].includes(locale) ? locale : "en";
  const rtl = current === "ar";
  return <div className="erp-mock" dir={rtl ? "rtl" : "ltr"} aria-label="Helixium ERP sample data preview">
    <div className="erp-mock-top"><span className="mock-dots"><i /><i /><i /></span><strong>Helixium ERP</strong><span className="sample-label">Sample data</span></div>
    <div className="erp-mock-body">
      <aside className="erp-mock-sidebar"><span className="mock-logo">H</span>{nav.map((item, index) => <div className={`mock-nav ${index === 0 ? "selected" : ""}`} key={item}><span className="mock-nav-icon" aria-hidden="true">{["⌂", "↗", "▦", "∑", "⚒", "▣", "◌"][index]}</span>{item}</div>)}</aside>
      <div className="erp-mock-content"><div className="mock-greeting"><div><span className="mock-overline">Monday, 25 October</span><h2>Good morning, team.</h2></div><span className="mock-avatar">HS</span></div><div className="mock-kpis"><div><span>Revenue this month</span><strong>$48,260</strong><small>↗ 12.8%</small></div><div><span>Open invoices</span><strong>24</strong><small>6 need attention</small></div><div><span>Field jobs today</span><strong>18</strong><small>4 awaiting assignment</small></div></div><div className="mock-agents"><div className="mock-panel-head"><div><span className="mock-overline">AI agents</span><h3>Ready for your approval</h3></div><span className="mock-count">3 actions</span></div><div className="mock-action"><span className="mock-action-icon teal">↔</span><div><strong>Match bank transactions</strong><span>12 transactions · Accounting</span></div><button>Approve</button></div><div className="mock-action"><span className="mock-action-icon violet">→</span><div><strong>Send payment reminders</strong><span>5 customers · Sales</span></div><button>Send</button></div><div className="mock-action"><span className="mock-action-icon amber">⚒</span><div><strong>Assign a work order</strong><span>WO-1048 · Field service</span></div><button>Assign</button></div></div></div>
    </div>
  </div>;
}
