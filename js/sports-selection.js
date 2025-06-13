// منطق اختيار الأنشطة الرياضية
let selectedSports = [];

function initializeSportsSelection() {
    // تهيئة متغير لتخزين الأنشطة الرياضية المختارة
    selectedSports = [];
    
    // إضافة هذا الكود إلى الصفحة عند تحميلها
    document.addEventListener('DOMContentLoaded', function() {
        updateSportsSelectionUI();
    });
}

function updateSportsSelectionUI() {
    // تحديث واجهة المستخدم بناءً على الأنشطة المختارة
    const container = document.getElementById('sports-options');
    if (!container) return;
    
    container.querySelectorAll('.option-card').forEach(card => {
        const sportId = card.dataset.sport;
        const radioInputs = card.querySelectorAll('input[type="radio"]');
        
        radioInputs.forEach(radio => {
            radio.addEventListener('change', function() {
                const duration = this.value;
                const sportId = card.dataset.sport;
                
                // إذا كانت المدة 12 يوم، نزيل أي أنشطة أخرى مختارة
                if (duration === '12') {
                    selectedSports = [{
                        id: sportId,
                        duration: duration
                    }];
                    
                    // تعطيل جميع الخيارات الأخرى
                    disableOtherSportOptions(sportId);
                } 
                // إذا كانت المدة 6 أيام
                else if (duration === '6') {
                    // إزالة النشاط الحالي من القائمة إذا كان موجوداً
                    selectedSports = selectedSports.filter(sport => sport.id !== sportId);
                    
                    // إضافة النشاط الجديد
                    selectedSports.push({
                        id: sportId,
                        duration: duration
                    });
                    
                    // إذا كان هناك أكثر من نشاطين، نزيل الأقدم
                    if (selectedSports.length > 2) {
                        selectedSports.shift();
                    }
                    
                    // تحديث حالة التعطيل لجميع الخيارات
                    updateDisabledState();
                }
                
                // تحديث واجهة المستخدم
                updateSelectionUI();
            });
        });
    });
}

function disableOtherSportOptions(exceptSportId) {
    const container = document.getElementById('sports-options');
    if (!container) return;
    
    container.querySelectorAll('.option-card').forEach(card => {
        const sportId = card.dataset.sport;
        const radioInputs = card.querySelectorAll('input[type="radio"]');
        
        if (sportId !== exceptSportId) {
            radioInputs.forEach(radio => {
                radio.disabled = true;
                radio.checked = false;
            });
            card.classList.add('disabled');
        }
    });
}

function updateDisabledState() {
    const container = document.getElementById('sports-options');
    if (!container) return;
    
    // إذا كان هناك نشاطان مختاران بالفعل، نعطل خيارات 6 أيام للأنشطة الأخرى
    const hasTwoSixDayActivities = selectedSports.length === 2 && 
                                  selectedSports.every(sport => sport.duration === '6');
    
    // إذا كان هناك نشاط 12 يوم، نعطل جميع الخيارات الأخرى
    const hasTwelveDayActivity = selectedSports.some(sport => sport.duration === '12');
    
    container.querySelectorAll('.option-card').forEach(card => {
        const sportId = card.dataset.sport;
        const radioInputs = card.querySelectorAll('input[type="radio"]');
        const isSportSelected = selectedSports.some(sport => sport.id === sportId);
        
        if (hasTwelveDayActivity) {
            // إذا كان هناك نشاط 12 يوم، نعطل جميع الخيارات الأخرى
            if (!isSportSelected) {
                radioInputs.forEach(radio => {
                    radio.disabled = true;
                    card.classList.add('disabled');
                });
            }
        } else if (hasTwoSixDayActivities) {
            // إذا كان هناك نشاطان 6 أيام، نعطل خيارات 6 أيام للأنشطة الأخرى
            if (!isSportSelected) {
                radioInputs.forEach(radio => {
                    if (radio.value === '6') {
                        radio.disabled = true;
                    } else {
                        radio.disabled = false;
                    }
                });
            }
        } else {
            // إلا نفعّل جميع الخيارات
            radioInputs.forEach(radio => {
                radio.disabled = false;
            });
            card.classList.remove('disabled');
        }
    });
}

function updateSelectionUI() {
    const container = document.getElementById('sports-options');
    if (!container) return;
    
    container.querySelectorAll('.option-card').forEach(card => {
        const sportId = card.dataset.sport;
        const isSportSelected = selectedSports.some(sport => sport.id === sportId);
        
        if (isSportSelected) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

function getSelectedSports() {
    return selectedSports;
}

// تهيئة منطق اختيار الأنشطة الرياضية
initializeSportsSelection();
