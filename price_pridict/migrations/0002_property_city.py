# Generated by Django 3.0.5 on 2023-04-15 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('price_pridict', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='city',
            field=models.CharField(default='Delhi', max_length=100),
            preserve_default=False,
        ),
    ]