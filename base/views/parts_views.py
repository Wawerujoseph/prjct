from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from ..models import Part1,Part2,Part3,Part4,Part5
from ..serializer import Part1Serializer,Part2Serializer,Part3Serializer,Part4Serializer,Part5Serializer,MYPart5Serializer
from rest_framework import status



@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart1(request):
    user = request.user
    data=request.data
    alreadyExist = user.part1_set.filter(user=user).exists()
    if alreadyExist:
        content = {'detail': 'Part1 already Submited'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        part1 = Part1.objects.create(
            user=user,
            name=data["name"],
            birthPlace=data["birthPlace"],
            birthDate=data["birthDate"],
            pin=data["pin"],
            nameChanged=data["nameChanged"],
            address=data["address"],
            phone=data["phone"],
            home_phone=data["home_phone"],
            estate_sublocation=data["estate_sublocation"],
            plot_village=data["plot_village"],
            email=data["email"],

            citizenBy=data["citizenBy"],

            marriage_status=data["marriage_status"],
            partner_name=data["partner_name"],
            maiden_name=data["maiden_name"],
            marriage_detail=data["marriage_detail"],

            reason_travel=data["reason_travel"],

            id_number=data["id_number"],
            country=data["country"],
            job=data["job"],
            height=data["height"],
            eye_color=data["eye_color"],
            mark=data["mark"],

            mother_name=data["mother_name"],
            mother_id=data["mother_id"],
            mother_passport=data["mother_passport"],
            mother_birthPlace=data["mother_birthPlace"],
            mother_address=data["mother_address"],
            mother_phone=data["mother_phone"],

            father_name=data["father_name"],
            father_id=data["father_id"],
            father_passport=data["father_passport"],
            father_birthPlace=data["father_birthPlace"],
            father_address=data["father_address"],
            father_phone=data["father_phone"]       

        )
        serializer = Part1Serializer(part1, many=False)
        return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart1(request,user):
    part1 = Part1.objects.filter(user=user)[0]
    serializer = Part1Serializer(part1, many=False)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart2(request):
    user = request.user
    data=request.data
    alreadyExist = user.part2_set.filter(user=user).exists()
    if alreadyExist:
        content = {'detail': 'Part2 already Submited'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        part2 = Part2.objects.create(
            user=user,
            name=data["name"],
            division=data["division"],
            location=data["location"],
            relationship=data["relationship"],
            id_number=data["id_number"],
            address=data["address"],
            phone=data["phone"],      
            email=data["email"]     

        )
        serializer = Part2Serializer(part2, many=False)
        return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart2(request,user):
    part2 = Part2.objects.filter(user=user)
    serializer = Part2Serializer(part2, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart3(request):
    user = request.user
    data=request.data
    alreadyExist = user.part3_set.filter(user=user).exists()
    if alreadyExist:
        content = {'detail': 'Part3 already Submited'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        part3 = Part3.objects.create(
            user=user,
            name=data["name"],
            job=data["job"],
            address=data["address"],
            id_number=data["id_number"],
            email=data["email"],     
            phone=data["phone"]      

        )
        serializer = Part3Serializer(part3, many=False)
        return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart3(request,user):
    part3 = Part3.objects.filter(user=user)[0]
    serializer = Part3Serializer(part3, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def uploadImage(request):
    user=request.user
    alreadyExist = user.part4_set.filter(user=user).exists()
    if alreadyExist:
        content = {'detail': 'Part4 already Submited'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:  
        part4 = Part4.objects.create(
        user=user,
        u_id_front=request.FILES.get("u_id_front"),
        u_id_back=request.FILES.get("u_id_back"),
        u_photo=request.FILES.get("u_photo"),
        u_b_certificate=request.FILES.get("u_b_certificate"),
        u_m_certificate=request.FILES.get("u_m_certificate"),
        p_id_front=request.FILES.get("p_id_front"),
        p_id_back=request.FILES.get("p_id_back"),
        p_photo=request.FILES.get("p_photo"),
        p_b_certificate=request.FILES.get("p_b_certificate"),
        r_id_front=request.FILES.get("r_id_front"),
        r_id_back=request.FILES.get("r_id_back"),
        r_photo=request.FILES.get("r_photo")
        )
      
        serializer = Part4Serializer(part4, many=False)
        return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart4(request,user):
    part4 = Part4.objects.filter(user=user)[0]
    serializer = Part4Serializer(part4, many=False)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPart5(request):
    user = request.user 
    data=request.data
    alreadyExist = user.part5_set.filter(user=user).exists()
    if alreadyExist:
        content = {'detail': 'You have already Submite application'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    else:
        part5 = Part5.objects.create(
            user=user,        
            Type=data['type'],
            number_pages=data['number_pages'],
            amount=data['amount'],           

        )
        serializer = Part5Serializer(part5, many=False)
        return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated,IsAdminUser])
def getPart5(request):
    part5 = Part5.objects.all()
    serializer = Part5Serializer(part5, many=True)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyPart5(request,user):
    part5 = Part5.objects.filter(user=user)[0]
    serializer = MYPart5Serializer(part5, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updatePart5ToPaid(request, pk):
    part5 = Part5.objects.get(id=pk)
    part5.isPaid = True
    part5.paidAt = datetime.now()
    part5.status= "processing"
    part5.save()

    return Response("Order was paid")


@api_view(["PUT"])
@permission_classes([IsAuthenticated, IsAdminUser])
def updatePart5ToDelivered(request, pk):
    part5 = Part5.objects.get(id=pk)
    part5.isDelivered = True
    part5.deliveredAt = datetime.now()
    part5.save()

    return Response("Order was Delivered")