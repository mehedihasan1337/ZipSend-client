import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SendPercal = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [cost, setCost] = useState(null);

  const parcelType = watch("type");

  // Example warehouse data (region + service centers)
  const warehouseData = {
    Dhaka: ["Mirpur", "Gulshan", "Uttara"],
    Chittagong: ["Agrabad", "Pahartali", "Panchlaish"],
    Rajshahi: ["Boalia", "Motihar"],
  };

  const calculateCost = (data) => {
    let baseCost = data.type === "document" ? 50 : 100;
    let weightCost =
      data.type === "non-document" && data.weight
        ? parseFloat(data.weight) * 10
        : 0;
    return baseCost + weightCost;
  };

  const onSubmit = (data) => {
    const deliveryCost = calculateCost(data);
    setCost(deliveryCost);

    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <p>
            <strong>Estimated Cost:</strong> ৳{deliveryCost}
          </p>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              // Example of saving to DB (mock)
              const parcelInfo = {
                ...data,
                cost: deliveryCost,
                creation_date: new Date().toISOString(),
              };
              console.log("Saved to database:", parcelInfo);
              toast.dismiss(t.id);
              toast.success("Parcel confirmed successfully!");
              reset();
            }}
          >
            Confirm & Save
          </button>
        </div>
      ),
      { duration: 6000 }
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Send Your Parcel
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Please fill in all the required fields to create a parcel order.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-6 rounded-xl shadow-md space-y-8"
      >
        {/* ---------- Parcel Info ---------- */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Parcel Info</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="font-medium">Parcel Type*</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="document"
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />
                  Document
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="non-document"
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />
                  Non-Document
                </label>
              </div>
            </div>
            <div>
              <label className="font-medium">Parcel Title*</label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="input input-bordered w-full"
                placeholder="e.g. Books, Clothes, etc."
              />
            </div>
            {parcelType === "non-document" && (
              <div>
                <label className="font-medium">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  {...register("weight")}
                  className="input input-bordered w-full"
                  placeholder="Optional"
                />
              </div>
            )}
          </div>
        </section>

        {/* ---------- Sender & Receiver Info ---------- */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ---------- Sender Info ---------- */}
          <section className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Sender Info</h2>
            <div className="grid gap-4">
              <input
                type="text"
                defaultValue="John Doe"
                {...register("sender_name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Sender Name"
              />
              <input
                type="text"
                {...register("sender_contact", { required: true })}
                className="input input-bordered w-full"
                placeholder="Sender Contact"
              />

              {/* Region */}
              <select
                {...register("sender_region", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {Object.keys(warehouseData).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              {/* Service Center */}
              <select
                {...register("sender_service_center", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Service Center</option>
                {Object.entries(warehouseData).map(([region, centers]) =>
                  centers.map((center) => (
                    <option key={center} value={center}>
                      {center} ({region})
                    </option>
                  ))
                )}
              </select>

              <input
                type="text"
                {...register("sender_address", { required: true })}
                className="input input-bordered w-full"
                placeholder="Sender Address"
              />
              <textarea
                {...register("pickup_instruction")}
                className="textarea textarea-bordered w-full"
                placeholder="Pickup Instruction (optional)"
              />
            </div>
          </section>

          {/* ---------- Receiver Info ---------- */}
          <section className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Receiver Info</h2>
            <div className="grid gap-4">
              <input
                type="text"
                {...register("receiver_name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Receiver Name"
              />
              <input
                type="text"
                {...register("receiver_contact", { required: true })}
                className="input input-bordered w-full"
                placeholder="Receiver Contact"
              />

              {/* Region */}
              <select
                {...register("receiver_region", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {Object.keys(warehouseData).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              {/* Service Center */}
              <select
                {...register("receiver_service_center", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Service Center</option>
                {Object.entries(warehouseData).map(([region, centers]) =>
                  centers.map((center) => (
                    <option key={center} value={center}>
                      {center} ({region})
                    </option>
                  ))
                )}
              </select>

              <input
                type="text"
                {...register("receiver_address", { required: true })}
                className="input input-bordered w-full"
                placeholder="Receiver Address"
              />
              <textarea
                {...register("delivery_instruction")}
                className="textarea textarea-bordered w-full"
                placeholder="Delivery Instruction (optional)"
              />
            </div>
          </section>
        </div>

        {/* ---------- Submit ---------- */}
        <div className="text-center pt-6">
          <button type="submit" className="btn btn-primary">
            Submit Parcel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendPercal;
