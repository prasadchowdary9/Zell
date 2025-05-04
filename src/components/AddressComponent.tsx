"use client";

import React from "react";

interface AddressComponentProps {
  values: {
    doorNo: string;
    street: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
  onChange: (field: string, value: string) => void;
}

const AddressComponent: React.FC<AddressComponentProps> = ({ values, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Door No</label>
        <input
          type="text"
          value={values.doorNo}
          onChange={(e) => onChange("doorNo", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter door number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Street / Area</label>
        <input
          type="text"
          value={values.street}
          onChange={(e) => onChange("street", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter street or area"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">City / Town</label>
        <input
          type="text"
          value={values.city}
          onChange={(e) => onChange("city", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter city or town"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">District</label>
        <input
          type="text"
          value={values.district}
          onChange={(e) => onChange("district", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter district"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <input
          type="text"
          value={values.state}
          onChange={(e) => onChange("state", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter state"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Pincode</label>
        <input
          type="text"
          value={values.pincode}
          onChange={(e) => onChange("pincode", e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter pincode"
          maxLength={6}
        />
      </div>
    </div>
  );
};

export default AddressComponent;
