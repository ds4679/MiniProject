import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import ModelCheckpoint, EarlyStopping, ReduceLROnPlateau
import os

# ✅ Dataset Path
dataset_path = r"C:\Users\sanja\OneDrive\Desktop\gaussian_filtered_images\gaussian_filtered_images"
img_size = (224, 224)
batch_size = 32

# ✅ Data Augmentation and Loading
datagen = ImageDataGenerator(
    rescale=1.0/255,
    rotation_range=20,
    width_shift_range=0.1,
    height_shift_range=0.1,
    shear_range=0.1,
    zoom_range=0.2,
    horizontal_flip=True,
    validation_split=0.2
)

train_data = datagen.flow_from_directory(
    dataset_path,
    target_size=img_size,
    batch_size=batch_size,
    class_mode='categorical',
    subset='training',
    shuffle=True
)

val_data = datagen.flow_from_directory(
    dataset_path,
    target_size=img_size,
    batch_size=batch_size,
    class_mode='categorical',
    subset='validation'
)

# ✅ Improved CNN Architecture
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', padding='same', input_shape=(224, 224, 3)),
    BatchNormalization(),
    MaxPooling2D(),

    Conv2D(64, (3, 3), activation='relu', padding='same'),
    BatchNormalization(),
    MaxPooling2D(),

    Conv2D(128, (3, 3), activation='relu', padding='same'),
    BatchNormalization(),
    MaxPooling2D(),

    Conv2D(256, (3, 3), activation='relu', padding='same'),
    BatchNormalization(),
    MaxPooling2D(),

    Flatten(),
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(train_data.num_classes, activation='softmax')
])

# ✅ Compile Model
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-4),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# ✅ Callbacks
checkpoint = ModelCheckpoint("best_model.keras", save_best_only=True, monitor="val_accuracy", mode="max", verbose=1)
early_stop = EarlyStopping(monitor="val_accuracy", patience=7, restore_best_weights=True)
reduce_lr = ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3, verbose=1)

# ✅ Train the Model
history = model.fit(
    train_data,
    validation_data=val_data,
    epochs=50,
    callbacks=[checkpoint, early_stop, reduce_lr]
)

# ✅ Save the final model
model.save("final_model.keras")

# ✅ Evaluate and Print Accuracy
val_loss, val_acc = model.evaluate(val_data)
print(f"\n✅ Final Validation Accuracy: {val_acc*100:.2f}%")
print("🎉 Model training complete! Best model saved.")



# import tensorflow as tf
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import ImageDataGenerator
# import numpy as np
# import matplotlib.pyplot as plt
# import seaborn as sns
# from sklearn.metrics import classification_report, confusion_matrix, roc_curve, roc_auc_score
# from sklearn.preprocessing import label_binarize

# # ✅ Paths
# model_path = "final_model.keras"
# dataset_path = r"C:\Users\sanja\OneDrive\Desktop\gaussian_filtered_images\gaussian_filtered_images"
# img_size = (224, 224)
# batch_size = 32

# # ✅ Load trained model
# model = load_model(model_path)

# # ✅ Prepare validation data (must match how training was done)
# datagen = ImageDataGenerator(rescale=1.0 / 255, validation_split=0.2)

# val_data = datagen.flow_from_directory(
#     dataset_path,
#     target_size=img_size,
#     batch_size=batch_size,
#     class_mode='categorical',
#     subset='validation',
#     shuffle=False
# )

# # ✅ Get class names
# class_labels = list(val_data.class_indices.keys())

# # ✅ Predict
# Y_pred = model.predict(val_data)
# y_pred = np.argmax(Y_pred, axis=1)
# y_true = val_data.classes

# # ✅ Classification Report
# print("\n📄 Classification Report:")
# print(classification_report(y_true, y_pred, target_names=class_labels))

# # ✅ Class-wise Accuracy
# print("\n📊 Class-wise Accuracy:")
# for i, label in enumerate(class_labels):
#     class_indices = np.where(y_true == i)[0]
#     correct_preds = np.sum(y_pred[class_indices] == i)
#     accuracy = correct_preds / len(class_indices)
#     print(f"✅ {label}: {accuracy * 100:.2f}%")

# # ✅ Confusion Matrix
# cm = confusion_matrix(y_true, y_pred)
# plt.figure(figsize=(8, 6))
# sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
#             xticklabels=class_labels, yticklabels=class_labels)
# plt.title("Confusion Matrix")
# plt.xlabel("Predicted Label")
# plt.ylabel("True Label")
# plt.tight_layout()
# plt.savefig("confusion_matrix.png")
# plt.show()

# # ✅ ROC Curves (One-vs-Rest)
# y_true_bin = label_binarize(y_true, classes=range(len(class_labels)))

# plt.figure(figsize=(10, 8))
# for i in range(len(class_labels)):
#     fpr, tpr, _ = roc_curve(y_true_bin[:, i], Y_pred[:, i])
#     auc = roc_auc_score(y_true_bin[:, i], Y_pred[:, i])
#     plt.plot(fpr, tpr, label=f'{class_labels[i]} (AUC = {auc:.2f})')

# plt.plot([0, 1], [0, 1], 'k--')
# plt.xlabel("False Positive Rate")
# plt.ylabel("True Positive Rate")
# plt.title("ROC Curve - One vs Rest")
# plt.legend(loc="lower right")
# plt.grid(True)
# plt.tight_layout()
# plt.savefig("roc_curve.png")
# plt.show()




# import tensorflow as tf
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import ImageDataGenerator
# import numpy as np
# import matplotlib.pyplot as plt
# import seaborn as sns
# from sklearn.metrics import classification_report, confusion_matrix, roc_curve, roc_auc_score
# from sklearn.preprocessing import label_binarize
# import pandas as pd

# # ✅ Paths
# model_path = "final_model.keras"
# dataset_path = r"C:\Users\sanja\OneDrive\Desktop\gaussian_filtered_images\gaussian_filtered_images"
# img_size = (224, 224)
# batch_size = 32

# # ✅ Load trained model
# model = load_model(model_path)

# # ✅ Prepare validation data
# datagen = ImageDataGenerator(rescale=1.0 / 255, validation_split=0.2)
# val_data = datagen.flow_from_directory(
#     dataset_path,
#     target_size=img_size,
#     batch_size=batch_size,
#     class_mode='categorical',
#     subset='validation',
#     shuffle=False
# )

# # ✅ Get class names
# class_labels = list(val_data.class_indices.keys())

# # ✅ Predict
# Y_pred = model.predict(val_data)
# y_pred = np.argmax(Y_pred, axis=1)
# y_true = val_data.classes

# # ✅ Classification Report
# print("\n📄 Classification Report:")
# report = classification_report(y_true, y_pred, target_names=class_labels, output_dict=True)
# print(classification_report(y_true, y_pred, target_names=class_labels))

# # ✅ Class-wise Accuracy Bar Plot
# acc_per_class = []
# for i, label in enumerate(class_labels):
#     class_indices = np.where(y_true == i)[0]
#     correct_preds = np.sum(y_pred[class_indices] == i)
#     accuracy = correct_preds / len(class_indices)
#     acc_per_class.append(accuracy * 100)

# plt.figure(figsize=(10, 5))
# sns.barplot(x=class_labels, y=acc_per_class, palette='crest')
# plt.title("Class-wise Accuracy (%)")
# plt.ylabel("Accuracy")
# plt.xlabel("Class")
# plt.ylim(0, 100)
# plt.tight_layout()
# plt.savefig("classwise_accuracy.png")
# plt.show()

# # ✅ Confusion Matrix (Heatmap)
# cm = confusion_matrix(y_true, y_pred)
# plt.figure(figsize=(8, 6))
# sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
#             xticklabels=class_labels, yticklabels=class_labels)
# plt.title("Confusion Matrix (Heatmap)")
# plt.xlabel("Predicted Label")
# plt.ylabel("True Label")
# plt.tight_layout()
# plt.savefig("confusion_matrix.png")
# plt.show()

# # ✅ Confusion Matrix (Bar Graph)
# plt.figure(figsize=(10, 6))
# cm_df = pd.DataFrame(cm, index=class_labels, columns=class_labels)
# cm_df.sum(axis=1).plot(kind='bar', color='salmon')
# plt.title("Total True Labels per Class")
# plt.ylabel("Number of Samples")
# plt.xlabel("Class")
# plt.tight_layout()
# plt.savefig("confusion_matrix_bar.png")
# plt.show()

# # ✅ ROC Curve (One-vs-Rest)
# y_true_bin = label_binarize(y_true, classes=range(len(class_labels)))
# plt.figure(figsize=(10, 8))
# for i in range(len(class_labels)):
#     fpr, tpr, _ = roc_curve(y_true_bin[:, i], Y_pred[:, i])
#     auc = roc_auc_score(y_true_bin[:, i], Y_pred[:, i])
#     plt.plot(fpr, tpr, label=f'{class_labels[i]} (AUC = {auc:.2f})')

# plt.plot([0, 1], [0, 1], 'k--')
# plt.xlabel("False Positive Rate")
# plt.ylabel("True Positive Rate")
# plt.title("ROC Curve - One vs Rest")
# plt.legend(loc="lower right")
# plt.grid(True)
# plt.tight_layout()
# plt.savefig("roc_curve.png")
# plt.show()

# # ✅ Performance Metrics Bar Graph (Precision, Recall, F1-Score)
# metrics_df = pd.DataFrame(report).transpose().loc[class_labels, ['precision', 'recall', 'f1-score']]
# metrics_df.plot(kind='bar', figsize=(12, 6), colormap='Paired')
# plt.title("Performance Metrics by Class")
# plt.ylabel("Score")
# plt.ylim(0, 1.1)
# plt.xticks(rotation=45)
# plt.tight_layout()
# plt.savefig("performance_metrics.png")
# plt.show()
