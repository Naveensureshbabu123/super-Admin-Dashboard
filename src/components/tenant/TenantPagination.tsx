interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function TenantPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-sm text-slate-500">
        Page {page} of {totalPages}
      </p>

      <div className="flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="border border-slate-300 bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 text-sm ${
              page === number
                ? "bg-blue-600 text-white"
                : "border border-slate-300 bg-white text-slate-600"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="border border-slate-300 bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TenantPagination;