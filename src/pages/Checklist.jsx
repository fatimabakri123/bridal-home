import { useLanguage } from "../context/LanguageContext";
import { useBridalList } from "../context/BridalListContext";

function Checklist() {
  const { language } = useLanguage();

  const {
    list,
    removeFromList,
  } = useBridalList();

  // ==========================================
  // SEND REQUEST TO WHATSAPP
  // ==========================================

  function handleSendRequest() {
    const phoneNumber = "96171523197";

    const message =
      language === "en"
        ? `Hello! I would like to request the following bridal items:

${list
  .map(
    (product) => `🛍️ ${product.name_en}
🖼️ Image: ${product.image_url}`
  )
  .join("\n\n")}

Thank you!`
        : `مرحباً! أريد طلب المنتجات التالية:

${list
  .map(
    (product) => `🛍️ ${product.name_ar}
🖼️ الصورة: ${product.image_url}`
  )
  .join("\n\n")}

شكراً لكم!`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <main className="checklist-page">

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="checklist-header">

        <h1>
          {language === "en"
            ? "My Bridal Checklist"
            : "قائمة تجهيز العروس"}
        </h1>

        <p>
          {language === "en"
            ? "Prepare your dream home step by step."
            : "جهزي بيت أحلامك خطوة بخطوة."}
        </p>

      </div>

      {/* ========================================
          EMPTY LIST
      ======================================== */}

      {list.length === 0 ? (

        <div className="empty-list">

          <h2>💍</h2>

          <p>
            {language === "en"
              ? "Your list is empty."
              : "قائمتك فارغة."}
          </p>

        </div>

      ) : (

        <>

          {/* ====================================
              PRODUCTS
          ==================================== */}

          <div className="checklist-products">

            {list.map((product) => {

              const productName =
                language === "en"
                  ? product.name_en
                  : product.name_ar;

              return (
                <div
                  className="checklist-item"
                  key={product.id}
                >

                  {/* PRODUCT IMAGE */}

                  <img
                    src={product.image_url}
                    alt={productName}
                  />

                  {/* PRODUCT INFO */}

                  <div className="checklist-info">

                    <h3>
                      {productName}
                    </h3>

                  </div>

                  {/* REMOVE BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      removeFromList(product.id)
                    }
                    aria-label={
                      language === "en"
                        ? "Remove product"
                        : "إزالة المنتج"
                    }
                  >
                    ✕
                  </button>

                </div>
              );
            })}

          </div>

          {/* ====================================
              REQUEST SECTION
          ==================================== */}

          <div className="checklist-summary">

            <h2>
              {language === "en"
                ? "Ready to send your list?"
                : "جاهزة لإرسال قائمتك؟"}
            </h2>

            <p>
              {language === "en"
                ? "Send your selected items directly to our store on WhatsApp."
                : "أرسلي المنتجات التي اخترتها مباشرةً إلى المحل عبر واتساب."}
            </p>

            <button
              type="button"
              className="request-button"
              onClick={handleSendRequest}
            >
              {language === "en"
                ? "Send Request To Store"
                : "إرسال الطلب للمحل"}
            </button>

          </div>

        </>

      )}

    </main>
  );
}

export default Checklist;