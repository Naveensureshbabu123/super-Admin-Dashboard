import type { TenantStatus as Status } from "../../types/tenant";

interface Props {
  status: Status;
}

function TenantStatus({ status }: Props) {
  return (
    <span
      className={`inline-flex px-3 py-1 text-xs font-medium ${
        status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      ● {status}
    </span>
  );
}

export default TenantStatus;