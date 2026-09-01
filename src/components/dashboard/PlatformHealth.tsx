function PlatformHealth() {
  return (
    <div className="border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Platform Health
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Current platform status
      </p>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            API Gateway
          </span>

          <span className="text-sm font-medium text-green-600">
            Healthy
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Database
          </span>

          <span className="text-sm font-medium text-green-600">
            Connected
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Server
          </span>

          <span className="text-sm font-medium text-green-600">
            Running
          </span>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-gray-600">
              Storage
            </span>

            <span className="text-sm font-medium">
              68%
            </span>
          </div>

          <div className="h-2 bg-gray-200">
            <div className="h-2 w-[68%] bg-blue-600"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-gray-600">
              CPU Usage
            </span>

            <span className="text-sm font-medium">
              42%
            </span>
          </div>

          <div className="h-2 bg-gray-200">
            <div className="h-2 w-[42%] bg-blue-600"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-gray-600">
              Memory Usage
            </span>

            <span className="text-sm font-medium">
              61%
            </span>
          </div>

          <div className="h-2 bg-gray-200">
            <div className="h-2 w-[61%] bg-blue-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformHealth;