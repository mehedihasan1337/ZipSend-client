import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router";

const SendPercal = () => {
  const { register, handleSubmit, watch, reset, setValue } = useForm();
  const serviceCenters = useLoaderData() || []; 

  const warehouseData = [...new Set(serviceCenters.map((w) => w.region))];

  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.center);

  const [cost, setCost] = useState(null);
  const [senderRegionState, setSenderRegionState] = useState("");
  const [receiverRegionState, setReceiverRegionState] = useState("");

  const parcelType = watch("type");

  // Clear weight field if parcel type changes
  useEffect(() => {
    if (parcelType !== "non-document") {
      setValue("weight", "");
    }
  }, [parcelType, setValue]);

  // Auto select first service center when region changes
  useEffect(() => {
    if (senderRegionState) {
      const centers = getDistrictsByRegion(senderRegionState);
      setValue("sender_service_center", centers[0] || "");
    }
  }, [senderRegionState, setValue]);

  useEffect(() => {
    if (receiverRegionState) {
      const centers = getDistrictsByRegion(receiverRegionState);
      setValue("receiver_service_center", centers[0] || "");
    }
  }, [receiverRegionState, setValue]);

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
              const parcelInfo = {
                ...data,
                cost: deliveryCost,
                creation_date: new Date().toISOString(),
              };

              console.log("Saved to database:", parcelInfo);

              toast.dismiss(t.id);
              toast.success("Parcel confirmed successfully!");
              reset();
              setSenderRegionState("");
              setReceiverRegionState("");
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
      <h1 className="text-3xl font-bold text-center mb-2">Send Your Parcel</h1>
      <p className="text-center text-gray-600 mb-6">
        Please fill in all the required fields to create a parcel order.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 p-6 rounded-xl shadow-md space-y-8">
        {/* Parcel Info */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Parcel Info</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="font-medium">Parcel Type*</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" value="document" {...register("type", { required: true })} className="radio radio-primary" />
                  Document
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value="non-document" {...register("type", { required: true })} className="radio radio-primary" />
                  Non-Document
                </label>
              </div>
            </div>

            <div>
              <label className="font-medium">Parcel Title*</label>
              <input type="text" {...register("title", { required: true })} className="input input-bordered w-full" placeholder="e.g. Books, Clothes" />
            </div>

            {parcelType === "non-document" && (
              <div>
                <label className="font-medium">Weight (kg)</label>
                <input type="number" step="0.1" {...register("weight")} className="input input-bordered w-full" placeholder="Optional" />
              </div>
            )}
          </div>
        </section>

        {/* Sender & Receiver */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sender */}
          <section className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Sender Info</h2>
            <div className="grid gap-4">
              <input type="text" {...register("sender_name", { required: true })} className="input input-bordered w-full" placeholder="Sender Name" />
              <input type="text" {...register("sender_contact", { required: true })} className="input input-bordered w-full" placeholder="Sender Contact" />

              <select {...register("sender_region", { required: true })} className="select select-bordered w-full" value={senderRegionState} onChange={(e) => setSenderRegionState(e.target.value)}>
                <option value="">Select Region</option>
                {warehouseData.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>

              <select {...register("sender_service_center", { required: true })} className="select select-bordered w-full">
                <option value="">Select Service Center</option>
                {senderRegionState && getDistrictsByRegion(senderRegionState).map((center) => (
                  <option key={center} value={center}>{center}</option>
                ))}
              </select>

              <input type="text" {...register("sender_address", { required: true })} className="input input-bordered w-full" placeholder="Sender Address" />
              <textarea {...register("pickup_instruction")} className="textarea textarea-bordered w-full" placeholder="Pickup Instruction (optional)"></textarea>
            </div>
          </section>

          {/* Receiver */}
          <section className="flex-1">
            <h2 className="text-xl font-semibold mb-3">Receiver Info</h2>
            <div className="grid gap-4">
              <input type="text" {...register("receiver_name", { required: true })} className="input input-bordered w-full" placeholder="Receiver Name" />
              <input type="text" {...register("receiver_contact", { required: true })} className="input input-bordered w-full" placeholder="Receiver Contact" />

              <select {...register("receiver_region", { required: true })} className="select select-bordered w-full" value={receiverRegionState} onChange={(e) => setReceiverRegionState(e.target.value)}>
                <option value="">Select Region</option>
                {warehouseData.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>

              <select {...register("receiver_service_center", { required: true })} className="select select-bordered w-full">
                <option value="">Select Service Center</option>
                {receiverRegionState && getDistrictsByRegion(receiverRegionState).map((center) => (
                  <option key={center} value={center}>{center}</option>
                ))}
              </select>

              <input type="text" {...register("receiver_address", { required: true })} className="input input-bordered w-full" placeholder="Receiver Address" />
              <textarea {...register("delivery_instruction")} className="textarea textarea-bordered w-full" placeholder="Delivery Instruction (optional)"></textarea>
            </div>
          </section>
        </div>

        <div className="text-center pt-6">
          <button type="submit" className="btn btn-primary">Submit Parcel</button>
        </div>
      </form>
    </div>
  );
};

export default SendPercal;
