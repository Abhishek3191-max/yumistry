import { ShoppingBag, Users, Package, TrendingUp } from 'lucide-react';

const stats = [
  { icon: ShoppingBag, label: 'Total Orders', value: '128', change: '+12%', color: 'bg-orange-50 text-orange-500' },
  { icon: TrendingUp, label: 'Revenue', value: '₹54,200', change: '+8%', color: 'bg-green-50 text-green-500' },
  { icon: Package, label: 'Products', value: '36', change: '+2', color: 'bg-blue-50 text-blue-500' },
  { icon: Users, label: 'Customers', value: '84', change: '+5%', color: 'bg-purple-50 text-purple-500' },
];

const DashboardStats = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {stats.map((stat, i) => {
      const Icon = stat.icon;
      return (
        <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
            <Icon size={20} />
          </div>
          <p className="text-2xl font-black text-gray-900">{stat.value}</p>
          <p className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
          <p className="text-xs font-bold text-green-500 mt-1">{stat.change} this week</p>
        </div>
      );
    })}
  </div>
);

export default DashboardStats;
