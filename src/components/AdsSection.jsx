import { useState } from "react";
import { Trash2, Edit, Plus, Eye, EyeOff } from "lucide-react";
import initialads from "../data/ads.json";
import AdsCard from "./AdsCard";
import AddEditAds from "./AddEditAds";

const AdsSection = () => {
  const [ads, setAds] = useState(initialads);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    link: "",
    type: "Banner",
    startDate: "",
    endDate: "",
  });

  const handleAddAd = () => {
    if (formData.title && formData.image && formData.link) {
      if (editingId) {
        setAds(
          ads.map((ad) => (ad.id === editingId ? { ...ad, ...formData } : ad)),
        );
        setEditingId(null);
      } else {
        setAds([
          ...ads,
          {
            id: Math.max(...ads.map((a) => a.id), 0) + 1,
            ...formData,
            active: true,
          },
        ]);
      }
      setFormData({
        title: "",
        image: "",
        link: "",
        type: "Banner",
        startDate: "",
        endDate: "",
      });
      setShowForm(false);
    }
  };

  const startEdit = (ad) => {
    setFormData({
      title: ad.title,
      image: ad.image,
      link: ad.link,
      type: ad.type,
      startDate: ad.startDate,
      endDate: ad.endDate,
    });
    setEditingId(ad.id);
    setShowForm(true);
  };

  const toggleAdStatus = (id) => {
    setAds(
      ads.map((ad) => (ad.id === id ? { ...ad, active: !ad.active } : ad)),
    );
  };

  const deleteAd = (id) => {
    setAds(ads.filter((ad) => ad.id !== id));
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 overflow-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ads Management</h1>
          <p className="text-gray-600 mt-1">
            Create and manage advertisements for Animekai.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({
              title: "",
              image: "",
              link: "",
              type: "Banner",
              startDate: "",
              endDate: "",
            });
            setShowForm(!showForm);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 font-medium"
        >
          <Plus size={20} />
          New Ad
        </button>
      </div>

      {showForm && (
        <AddEditAds
          formData={formData}
          setShowForm={setShowForm}
          setFormData={setFormData}
          editingId={editingId}
          setEditingId={setEditingId}
          handleAddAd={handleAddAd}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <AdsCard
            key={ad.id}
            toggleAdStatus={toggleAdStatus}
            ad={ad}
            deleteAd={deleteAd}
            startEdit={startEdit}
          />
        ))}
      </div>

      {ads.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <p className="text-gray-600 text-lg">No ads created yet.</p>
        </div>
      )}
    </div>
  );
};

export default AdsSection;
