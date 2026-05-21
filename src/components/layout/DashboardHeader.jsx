export default function DashboardHeader({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
      <div>
        <h1 className="text-3xl font-black text-white">
          {title}
        </h1>

        <p className="text-gray-400 mt-2">
          {subtitle}
        </p>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
}