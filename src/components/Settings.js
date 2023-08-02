import React, { useState } from 'react';
import Toggle from './ui/Toggle';

const defaultValues = {
  fps: 23,
  color: '#292727',
  charset: 'M',
  size: 12,
  animation: true,
};

const Settings = (props) => {
  const { setIsOpen, setSettings, settings } = props;
  const [formState, setFormState] = useState(settings);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings(formState);
    setIsOpen(false);
  };

  const resetToDefaultValues = () => {
    setSettings(defaultValues); // Reset the formState to the default settings
    setIsOpen(false); // Close the modal
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue =
      type === 'checkbox'
        ? checked
        : type === 'number'
        ? parseInt(value)
        : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <>
      <h2 className="font-bold text-2xl sm:text-3xl mb-8 text-center">
        Settings
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-1 gap-4 sm:text-xl font-bold"
      >
        <Toggle
          label="Background animation"
          defaultOn={formState.animation}
          onChange={(newValue) =>
            setFormState((prevState) => ({
              ...prevState,
              animation: newValue,
            }))
          }
        />
        <div className="flex justify-between">
          <label htmlFor="charset">Charset</label>
          <input
            type="text"
            className="text-black p-1 font-normal text-base rounded-md"
            name="charset"
            value={formState.charset}
            disabled={!formState.animation}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="fps">Frame</label>
          <input
            className="text-black p-1 font-normal text-base text-right rounded-md"
            type="number"
            name="fps"
            value={formState.fps}
            disabled={!formState.animation}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="fps">Size</label>
          <input
            className="text-black p-1 font-normal text-base text-right rounded-md"
            type="number"
            name="size"
            value={formState.size}
            disabled={!formState.animation}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="color">Color</label>
          <div className="rounded-full border-2 border-white flex items-center justify-center overflow-hidden w-10 h-10 ">
            <input
              className="text-black cursor-pointer w-[200%] h-[200%] aspect-square"
              type="color"
              name="color"
              value={formState.color}
              disabled={!formState.animation}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          type="button"
          className="w-32 rounded-xl self-center"
          onClick={() => resetToDefaultValues()}
        >
          Default
        </button>
        <div className="flex gap-4 justify-center h-12 mt-6">
          <button
            type="button"
            className="w-32 bg-gray-900 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button type="submit" className="w-32 bg-gray-600 rounded-xl">
            Ok
          </button>
        </div>
      </form>
    </>
  );
};

export default Settings;