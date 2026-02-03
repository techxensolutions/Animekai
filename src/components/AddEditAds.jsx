const AddEditAds = ({
  formData,
  setFormData,
  setShowForm,
  editingId,
  setEditingId,
  handleAddAd,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {editingId ? "Edit Ad" : "Create New Ad"}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ad Title
            </label>
            <input
              type="text"
              placeholder="Enter ad title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Link/URL
            </label>
            <input
              type="url"
              placeholder="Enter destination URL"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Ad Type
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Banner">Banner</option>
                <option value="Square">Square</option>
                <option value="Vertical">Vertical</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddAd}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
            >
              {editingId ? "Update Ad" : "Create Ad"}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditAds;
