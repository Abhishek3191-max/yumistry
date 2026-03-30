const orders = [
  { id: '#1023', customer: 'Rahul Sharma', amount: '₹340', status: 'Delivered', time: '10 mins ago' },
  { id: '#1022', customer: 'Priya Singh', amount: '₹210', status: 'Pending', time: '25 mins ago' },
  { id: '#1021', customer: 'Amit Kumar', amount: '₹580', status: 'Processing', time: '1 hr ago' },
  { id: '#1020', customer: 'Neha Gupta', amount: '₹125', status: 'Delivered', time: '2 hrs ago' },
  { id: '#1019', customer: 'Vikram Yadav', amount: '₹890', status: 'Cancelled', time: '3 hrs ago' },
];

const statusColors = {
  Delivered: 'bg-green-50 text-green-600',
  Pending: 'bg-yellow-50 text-yellow-600',
  Processing: 'bg-blue-50 text-blue-600',
  Cancelled: 'bg-red-50 text-red-500',
};

const RecentOrders = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
      <h3 className="font-black text-gray-800 text-sm">Recent Orders</h3>
      <button className="text-xs font-bold text-[#f52d05]">View all</button>
    </div>
    <div className="divide-y divide-gray-50">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between px-5 py-3">
          <div>
            <p className="text-sm font-bold text-gray-800">{order.customer}</p>
            <p className="text-xs text-gray-400">{order.id} · {order.time}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-black text-gray-800">{order.amount}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentOrders;
