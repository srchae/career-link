import { useState } from "react";

import { useController } from "react-hook-form";

import { Listbox } from "@headlessui/react";

const Basic = ({ options, label, control, name }: any) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
    defaultValue: options[0]?.name || "", // 기본값 설정
  });

  const selectedOption =
    options.find((option) => option.name === value) || options[0];

  return (
    <div className="relative z-20 w-full">
      <label
        htmlFor={name}
        className="text-sm text-foreground absolute -top-[10px] left-2 bg-white px-1 transition-all"
      >
        {label}
      </label>
      <Listbox
        value={selectedOption}
        onChange={(option) => onChange(option.name)} // 선택된 옵션의 name만 저장
      >
        <div>
          <Listbox.Button
            id={name}
            className="w-full rounded-md border border-gray-300 px-3 py-4 text-left focus:outline-none focus:ring-2 focus:ring-signature"
          >
            <p className="text-sm">{selectedOption.name}</p>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full rounded-md bg-white shadow-lg z-10">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none py-3 px-4 text-sm ${
                    active
                      ? "bg-signature bg-opacity-10 text-signatureDark"
                      : "text-foreground"
                  }`
                }
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

const NoLabel = ({ options }: any) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div>
          <Listbox.Button
            id="multi-select"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-signature"
          >
            <p className="text-sm">{selected.name}</p>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full rounded-md bg-white shadow-lg z-10">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none py-2 px-3 text-sm ${
                    active
                      ? "bg-signature bg-opacity-10 text-signatureDark"
                      : "text-foreground"
                  }`
                }
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export const MultiSelect = {
  Basic,
  NoLabel,
};
